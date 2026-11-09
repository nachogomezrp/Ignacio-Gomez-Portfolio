"use client";

import { useRef, useState } from "react";
import { profile } from "@/lib/data";
import { DownloadIcon } from "./Icons";

export default function CvPreview() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
    dialog.current?.showModal();
  };

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={openModal}
          className="inline-flex items-center gap-3 border border-line px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors duration-200 hover:border-white"
        >
          Vista previa del CV
        </button>
        <a
          href={profile.cv}
          download
          className="inline-flex items-center gap-3 bg-signal px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.2em] text-ink transition-colors duration-200 hover:bg-signal-dark hover:text-white"
        >
          <DownloadIcon /> Descargar PDF
        </a>
      </div>

      <dialog
        ref={dialog}
        onClose={() => setOpen(false)}
        onClick={(e) => e.target === e.currentTarget && dialog.current?.close()}
        aria-label="Vista previa del CV"
        className="m-auto h-[90vh] w-[min(1000px,95vw)] flex-col border border-line bg-ink p-0 text-white backdrop:bg-black/85 open:flex"
      >
        <div className="flex items-center justify-between border-b border-line px-4 py-3">
          <span className="label">CV — Ignacio Gómez</span>
          <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-[0.2em]">
            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white"
            >
              Abrir en pestaña
            </a>
            <button
              type="button"
              onClick={() => dialog.current?.close()}
              className="text-signal hover:text-white"
            >
              Cerrar
            </button>
          </div>
        </div>

        {open && (
          <iframe
            src={`${profile.cv}#view=FitH`}
            title="Vista previa del CV"
            className="w-full flex-1 bg-white"
          />
        )}
      </dialog>
    </>
  );
}
