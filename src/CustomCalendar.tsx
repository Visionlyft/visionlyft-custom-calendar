import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CustomCalendarProps, CellStyle } from "./CustomCalendarTypes";
import { styles as defaultStyles } from "./CustomCalendarStyles";

interface IconProps {
  prevIcon?: React.ReactNode;
  nextIcon?: React.ReactNode;
}

export const CustomCalendar: React.FC<
  CustomCalendarProps & IconProps & CellStyle
> = ({
  containerStyle,
  headerStyle,
  headerTextStyle,
  navButtonStyle,
  rowStyle,
  prevIcon,
  nextIcon,
  cellStyle,
  cellTextStyle,
  selectedDateCellStyle,
  onSubmit, // Destructure onSubmit prop
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const generateMatrix = (): (string | number)[][] => {
    const matrix: (string | number)[][] = [];
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    matrix[0] = daysOfWeek;

    const firstDayOfMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    ).getDay();
    const daysInMonth = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    ).getDate();
    let dayCounter = 1;

    for (let row = 1; row < 7; row++) {
      matrix[row] = [];
      for (let col = 0; col < 7; col++) {
        if (row === 1 && col < firstDayOfMonth) {
          matrix[row][col] = "";
        } else if (dayCounter > daysInMonth) {
          matrix[row][col] = "";
        } else {
          matrix[row][col] = dayCounter++;
        }
      }
    }
    return matrix;
  };

  const changeMonth = (n: number) => {
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + n,
      1
    );
    setSelectedDate(newDate);
  };

  const handleDateSelect = (date: number) => {
    const newDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      date
    );
    setSelectedDate(newDate);

    const addDay = new Date(newDate);
    addDay.setDate(newDate.getDate() + 1);

    if (onSubmit) {
      onSubmit(addDay);
    }
  };

  const matrix = generateMatrix();
  const rows = matrix.map((row, rowIndex) => (
    <View key={rowIndex} style={[defaultStyles.row, rowStyle]}>
      {row.map((cell, colIndex) => (
        <TouchableOpacity
          key={colIndex}
          style={[
            defaultStyles.cell,
            cellStyle,
            cell === selectedDate.getDate() ? selectedDateCellStyle : null,
          ]}
          onPress={() => typeof cell === "number" && handleDateSelect(cell)}
        >
          <Text style={[defaultStyles.cellText, cellTextStyle]}>
            {cell !== "" ? cell : ""}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  ));

  return (
    <View style={[defaultStyles.container, containerStyle]}>
      <View style={[defaultStyles.header, headerStyle]}>
        <TouchableOpacity onPress={() => changeMonth(-1)}>
          {prevIcon ? (
            prevIcon
          ) : (
            <Text style={[defaultStyles.navButton, navButtonStyle]}>
              Previous
            </Text>
          )}
        </TouchableOpacity>
        <Text style={[defaultStyles.headerText, headerTextStyle]}>
          {selectedDate.toLocaleDateString("default", {
            month: "long",
            year: "numeric",
          })}
        </Text>
        <TouchableOpacity onPress={() => changeMonth(1)}>
          {nextIcon ? (
            nextIcon
          ) : (
            <Text style={[defaultStyles.navButton, navButtonStyle]}>Next</Text>
          )}
        </TouchableOpacity>
      </View>
      {rows}
    </View>
  );
};
