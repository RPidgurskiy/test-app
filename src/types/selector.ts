import {EuiComboBoxOptionOption} from "@elastic/eui/src/components/combo_box/types";

export interface SelectorProps {
    options: EuiComboBoxOptionOption[];
    selectedPosts: EuiComboBoxOptionOption[];
    onChange: (e: any) => void;
    isLoading: boolean;
}