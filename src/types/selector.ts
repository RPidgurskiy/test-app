import {EuiComboBoxOptionOption} from "@elastic/eui/src/components/combo_box/types";

export interface SelectorProps {
    options: any;
    selectedPosts: EuiComboBoxOptionOption[];
    onChange: (e: any) => void;
    isLoading: boolean;
}