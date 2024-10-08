import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Ingredient } from "@/lib/types";
import { FileText, Image } from "lucide-react";
import jsPDF from "jspdf";

interface GenerateShareFileProps {
  finalIngredientsList: Ingredient[];
}

export function GenerateShareFile({
  finalIngredientsList,
}: GenerateShareFileProps) {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null);

  const generateFiles = async () => {
    // Generate PDF
    const pdf = new jsPDF();
    pdf.setFontSize(16);
    let yPos = 20;
    const leftColumn = 20;
    const rightColumn = 115;
    const pageHeight = pdf.internal.pageSize.height;
    const lineHeight = 8;

    finalIngredientsList.forEach((ingredient, index) => {
      const column = index % 2 === 0 ? leftColumn : rightColumn;

      // Check if we need to move to a new page
      if (yPos > pageHeight - 20) {
        pdf.addPage();
        yPos = 20; // Reset yPos for the new page
      }

      pdf.text(`${ingredient.name}`, column, yPos);
      pdf.text(`${ingredient.quantity} ${ingredient.unit}`, column + 78, yPos, {
        align: "right",
      });

      if (index % 2 !== 0) {
        yPos += lineHeight; // Move to next line after right column
      }
    });

    const pdfBlob = pdf.output("blob");
    const pdfFile = new File([pdfBlob], "ingredients.pdf", {
      type: "application/pdf",
    });
    setPdfFile(pdfFile);

    // Generate Image
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = Math.max(600, finalIngredientsList.length * 17 + 40);
    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "black";
      ctx.font = "18px Arial";

      let yPos = 100;
      const leftColumn = 100;
      const rightColumn = 440;

      finalIngredientsList.forEach((ingredient, index) => {
        const column = index % 2 === 0 ? leftColumn : rightColumn;
        ctx.textAlign = "left";
        ctx.fillText(ingredient.name, column, yPos);
        ctx.textAlign = "right";
        ctx.fillText(
          `${ingredient.quantity} ${ingredient.unit}`,
          column + 270,
          yPos
        );
        if (index % 2 !== 0) {
          yPos += 30; // Move to next line after right column
        }
      });
    }

    const imageBlob = await new Promise<Blob>((resolve) =>
      canvas.toBlob((blob) => resolve(blob as Blob))
    );
    const imageFile = new File([imageBlob], "ingredients.png", {
      type: "image/png",
    });
    setImageFile(imageFile);
  };

  const sharepdfOnWhatsApp = async () => {
    if (pdfFile) {
      const files = [pdfFile];
      if (navigator.share && navigator.canShare({ files })) {
        try {
          await navigator.share({
            files: files,
            title: "Ingredients List",
            text: "Here are the ingredients list as PDF and image files.",
          });
          console.log("Files shared successfully");
        } catch (error) {
          console.error("Error sharing files:", error);
          manualShareInstructions();
        }
      } else {
        manualShareInstructions();
      }
    } else {
      alert("Please generate files before sharing.");
    }
  };
  const shareimgOnWhatsApp = async () => {
    if (imageFile) {
      const files = [imageFile];
      if (navigator.share && navigator.canShare({ files })) {
        try {
          await navigator.share({
            files: files,
            title: "Ingredients List",
            text: "Here are the ingredients list as PDF and image files.",
          });
          console.log("Files shared successfully");
        } catch (error) {
          console.error("Error sharing files:", error);
          manualShareInstructions();
        }
      } else {
        manualShareInstructions();
      }
    } else {
      alert("Please generate files before sharing.");
    }
  };

  const manualShareInstructions = () => {
    alert(
      "To share these files on WhatsApp:\n" +
        "1. Download both the PDF and PNG files.\n" +
        "2. Open WhatsApp on your device.\n" +
        "3. Choose the contact or group you want to send the files to.\n" +
        "4. Tap the attachment icon and select the downloaded files.\n" +
        "5. Send the message with the attached files."
    );
  };

  return (
    <div className="flex flex-row gap-3">
      <Button onClick={generateFiles} variant="default" className="mb-4 w-full">
        Generate Files
      </Button>
      <Button
        onClick={shareimgOnWhatsApp}
        variant="secondary"
        className="mb-4 w-full"
        disabled={!pdfFile || !imageFile}
      >
        <span className="flex gap-2 items-center">
          Share <Image size={30} />
        </span>
      </Button>
      <Button
        onClick={sharepdfOnWhatsApp}
        variant="secondary"
        className="mb-4 w-full"
        disabled={!pdfFile || !imageFile}
      >
        <span className="flex gap-2 items-center">
          Share <FileText size={30} />
        </span>
      </Button>
    </div>
  );
}
