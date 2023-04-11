import React, { useState } from 'react';
  import { StyleSheet, View } from 'react-native';
  import { SelectCountry } from 'react-native-element-dropdown';

  const local_data = [
    {
      value: '1',
      lable: 'Empresa ',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '2',
      lable: 'Fulano',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '3',
      lable: 'Loja tal ',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '4',
      lable: 'Hospital tal',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '5',
      lable: 'SuperMercado tal',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '6',
      lable: 'Carlos Eduardo',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '7',
      lable: 'Vandilma',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
    {
      value: '8',
      lable: 'Marcelo',
      image: {
        uri: 'https://www.vigcenter.com/public/all/images/default-image.jpg',
      },
    },
  ];

  const SelectCountryScreen = _props => {
    const [country, setCountry] = useState('');

    return (
      <View style={styles.container}>
      <SelectCountry
        style={styles.dropdown}
        selectedTextStyle={styles.selectedTextStyle}
        placeholderStyle={styles.placeholderStyle}
        imageStyle={styles.imageStyle}
        iconStyle={styles.iconStyle}
        maxHeight={200}
        value={country}
        data={local_data}
        valueField="value"
        labelField="lable"
        imageField="image"
        placeholder="Selecione o Cliente..."
        searchPlaceholder="Search..."
        onChange={e => {
          setCountry(e.value);
        }}
      />
      </View>
    );
  };

  export default SelectCountryScreen;

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor: '#191970'
    },

    dropdown: {
      margin: 16,
      height: 50,
      width: 250,
      backgroundColor: '#fff',
      borderRadius: 22,
      paddingHorizontal: 8,
    },
    imageStyle: {
      width: 28,
      height: 28,
      borderRadius: 12,
    },
    placeholderStyle: {
      fontSize: 16,
    },
    selectedTextStyle: {
      fontSize: 18,
      marginLeft: 8,
    },
    iconStyle: {
      width: 20,
      height: 20,
    },
  });
