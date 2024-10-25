import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Task } from "../interfaces";

interface TaskComponentProps extends Task {
  removeTask: (taskId: string) => void; // Add this to the props interface
}

export default function TaskComponent({
  id,
  title,
  description,
  status,
  removeTask,
}: TaskComponentProps) {
  const currentStatus = (status: number) => {
    if (status === 1) {
      return "Pendente";
    }
    if (status === 2) {
      return "Concluído";
    }
    if (status === 3) {
      return "Cancelado";
    }
    return "Desconhecido";
  };

  const currentColor = (status: number) => {
    if (status === 1) {
      return "#E6B800";
    }
    if (status === 2) {
      return "#4CAF50";
    }
    if (status === 3) {
      return "#FF4D4D";
    }
    return "#A9A9A9";
  };

  const currentBGColor = (status: number) => {
    if (status === 1) {
      return "#FFF9B0";
    }
    if (status === 2) {
      return "#A5D6A7";
    }
    if (status === 3) {
      return "#FFB3B3";
    }
    return "#D3D3D3";
  };

  return (
    <View
      style={[
        styles.taskContainer,
        { backgroundColor: currentBGColor(status) },
      ]}
    >
      <View
        style={[styles.header, { borderBottomColor: currentColor(status) }]}
      >
        <Text style={[styles.title, { color: currentColor(status) }]}>
          {title}
        </Text>
      </View>
      <View style={styles.middle}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={[styles.footer, { borderTopColor: currentColor(status) }]}>
        <View style={styles.footerL}>
          <FontAwesome6
            name="circle-exclamation"
            size={20}
            color={currentColor(status)}
          />
          <Text>{currentStatus(status)}</Text>
        </View>
        <View style={styles.footerR}>
          <TouchableOpacity onPress={() => removeTask(id)}>
            <FontAwesome6
              name="trash-can"
              size={20}
              color={currentColor(status)}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome6
              name="pen-to-square"
              size={20}
              color={currentColor(status)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    width: "100%",
    paddingHorizontal: 5,
    borderRadius: 16,
    marginBottom: 10, // Space between tasks
  },
  header: {
    padding: 10,
    borderBottomWidth: 1,
  },
  middle: {
    padding: 10,
    paddingBottom: 20,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderTopWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {},

  footerL: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  footerR: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});
