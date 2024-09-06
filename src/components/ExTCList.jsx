import * as React from "react";
import { StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import { DataTable } from "react-native-paper";
import * as Clipboard from 'expo-clipboard';

const ExTCList = ({ items }) => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([10]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(10);

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  const copyToClipboard = (text) => {
    Clipboard.setStringAsync(text);
    Alert.alert("Copied to clipboard", text);
  };

  return (
    <ScrollView horizontal>
      <DataTable>
        <DataTable.Header>
          <DataTable.Title style={styles.header}>ID</DataTable.Title>
          <DataTable.Title style={styles.header}>TC</DataTable.Title>
          <DataTable.Title style={styles.header}>ADI</DataTable.Title>
          <DataTable.Title style={styles.header}>SOYADI</DataTable.Title>
          <DataTable.Title style={styles.header}>DOGUMTARIHI</DataTable.Title>
          <DataTable.Title style={styles.header}>IL</DataTable.Title>
          <DataTable.Title style={styles.header}>ILCE</DataTable.Title>
          <DataTable.Title style={styles.header}>ANNEADI</DataTable.Title>
          <DataTable.Title style={styles.header}>ANNETC</DataTable.Title>
          <DataTable.Title style={styles.header}>BABAADI</DataTable.Title>
          <DataTable.Title style={styles.header}>BABATC</DataTable.Title>
          <DataTable.Title style={styles.header}>UYRUK</DataTable.Title>
        </DataTable.Header>

        {items.slice(from, to).map((item, itemIndex) => (
          <DataTable.Row key={itemIndex} style={styles.row}>
            {Object.keys(item).map((key, keyIndex) => (
              <TouchableOpacity
                key={`${itemIndex}-${keyIndex}`} 
                onPress={() => copyToClipboard(item[key])}
                style={styles.cell}
              >
                <DataTable.Cell style={styles.cell}>{item[key]}</DataTable.Cell>
              </TouchableOpacity>
            ))}
          </DataTable.Row>
        ))}

        <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / itemsPerPage)}
          onPageChange={(page) => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={itemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          showFastPaginationControls
          selectPageDropdownLabel={"Rows per page"}
        />
      </DataTable>
    </ScrollView>
  );
};

export default ExTCList;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
  },
  cell: {
    flex: 1,
    width: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});
