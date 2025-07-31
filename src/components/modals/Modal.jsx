import React, { useRef, useEffect } from 'react';

export const Modal = ({
    isOpen,
    onClose,
    onSave,
    title,
    children,
    saveText = "Guardar",
    cancelText = "Cancelar",
    showSaveButton = true
}) => {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;

        if (isOpen) {
            dialog.showModal();
        } else {
            dialog.close();
        }

        const handleClose = (e) => {
            if (e.target === dialog) {
                onClose();
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                onClose();
            }
        };

        dialog.addEventListener('click', handleClose);
        dialog.addEventListener('keydown', handleKeyDown);

        return () => {
            dialog.removeEventListener('click', handleClose);
            dialog.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    return (
        <dialog
            ref={dialogRef}
            className="rounded-lg shadow-xl border-0 p-0 max-w-md w-full backdrop:bg-black backdrop:bg-opacity-50 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
            <div className="bg-white rounded-lg overflow-hidden">
                {/* Header */}
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-900">{title}</h2>
                </div>

                <div className="px-6 py-4">
                    {children}
                </div>

                {/* Footer */}
                <div className="px-6 py-4 border-t border-gray-200 flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                    >
                        {cancelText}
                    </button>
                    {showSaveButton && (
                        <button
                            onClick={onSave}
                            className="px-4 py-2 text-white bg-teal-500 rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
                        >
                            {saveText}
                        </button>
                    )}
                </div>
            </div>
        </dialog>
    );
};
