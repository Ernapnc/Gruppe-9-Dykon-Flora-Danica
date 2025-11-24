import { FocusTrap } from "focus-trap-react";
import type { ReactNode } from "react";

interface ReusableFocusTrapProps {
    children: ReactNode; 
    initialFocusSelector?: string;
    active?: boolean; 
}


const ReusableFocusTrap = ({
    children,
    initialFocusSelector,
    active = true,
}: ReusableFocusTrapProps) => {
    return (
    <FocusTrap
    active={active}
      focusTrapOptions={{
        initialFocus: initialFocusSelector
        ? () =>
            document.querySelector<HTMLElement>(initialFocusSelector) ?? 
        undefined
        : undefined, 
        escapeDeactivates: true, 
        clickOutsideDeactivates: false,
        }}
        >
        <div>{children}</div>
    </FocusTrap>
    );
};
export default ReusableFocusTrap; 