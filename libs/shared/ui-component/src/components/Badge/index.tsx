import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { renderNode } from '../../helpers';
import { useStyles } from './styles';
import { Props } from './props';

const BadgeView: React.FC<Props> = (props) => {
  const { text, children, onPress, disabled = false } = props;

  // ================= VARIABLES
  const hasContent = !!text || !!children;

  const { wrapperStyles, textStyles, viewStyles } = useStyles(props);

  // ================= VIEWS
  const renderContent = () => {
    if (!hasContent) return null;
    return renderNode(Text, text ?? children, { style: textStyles });
  };

  const renderView = () => {
    if (!onPress) {
      return (
        <View
        // style={viewStyles}
        >
          {renderContent()}
        </View>
      );
    }
    return (
      <TouchableOpacity
        disabled={disabled}
        // style={viewStyles}
        onPress={onPress}
      >
        {renderContent()}
      </TouchableOpacity>
    );
  };

  return <View style={wrapperStyles}>{renderView()}</View>;
};

// ================= EXPORTS
export type BadgeProps = Props;
export const Badge = BadgeView;
export default Badge;
