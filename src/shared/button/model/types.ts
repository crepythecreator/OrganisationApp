export type ButtonType = 'save' | 'publish' | 'copy' | 'cancel' | 'details' | 'delete';

export interface ButtonProps {
    type: ButtonType;
    onClick: () => void;
    className?: string;
}