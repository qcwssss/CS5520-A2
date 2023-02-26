import { StyleSheet } from "react-native";

const colors = {
  bgColor: "#3795BD",
  highlight: "#FDFF00",
  inactive: "#BDCDD6",
  barColor: "#5B8FB9",
  lightBg: "#ECF9FF",
  navy: "#00337C",
  lightText: "#ECF2FF",
  btnColor: "#0F6292",
};

const basicContainer = {
  flex: 1,
  alignItems: "center",
  backgroundColor: "lightblue",
};

const styles = StyleSheet.create({
  screenContainer: {
    ...basicContainer,
    justifyContent: "center",
  },
  editContainer: {
    ...basicContainer,
    paddingTop: 60,
    justifyContent: "flex-start",
  },
  card: {
    width: "70%",
    borderRadius: 10,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    backgroundColor: colors.lightBg,
  },
  textContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    width: "80%",
    margin: 5,
    justifyContent: "flex-start",
    marginVertical: 8,
  },
  input: {
    backgroundColor: "#fff",
    width: 220,
    marginHorizontal: 10,
    borderRadius: 5,
    padding: 8,
    backgroundColor: "#ECF2FF",
  },
  label: {
    fontWeight: "bold",
    fontSize: 16,
    color: colors.navy,
    marginBottom: 5,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  button: {
    backgroundColor: colors.btnColor,
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  createBtn: {
    backgroundColor: colors.btnColor,
    marginTop: 20,
    marginHorizontal: 10,
    padding: 6,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  addButton: {
    padding: 10,
    paddingHorizontal: 20,
  },
});

const headerOptionsStyle = {
  headerStyle: {
    backgroundColor: colors.bgColor,
  },
  headerTintColor: "#fff",
  headerTitleStyle: {
    fontSize: 20,
  },
  headerBackTitle: "Back",
};

export { colors, headerOptionsStyle };
export default styles;
