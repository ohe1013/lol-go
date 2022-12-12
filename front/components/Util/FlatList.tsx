import React from "react";
import { FlatList, FlatListProps } from "react-native";

import { uniqueId } from "lodash";

/** This component was created to avoid the Warning about nested virtualized lists when nesting a flatlist inside a scrollview */

const FlatListScrollView = <T extends any>({
    children,
    ...props
}: React.PropsWithChildren<Partial<FlatListProps<T>>>) => {
    return (
        <FlatList
            data={props.data}
            showsVerticalScrollIndicator={false}
            renderItem={() => <React.Fragment>{children}</React.Fragment>}
            keyExtractor={(_, index) => uniqueId("flat-list-scroll-view-element-" + index)}
            initialNumToRender={1}
            maxToRenderPerBatch={1}
            {...props}
        />
    );
};

export default FlatListScrollView;
