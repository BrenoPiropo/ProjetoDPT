import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import { styles } from './style';
import { StackNavigationProp } from '@react-navigation/stack';

interface FormInputs {
  campo1?: number;
  campo2?: number;
  campo3?: string;
  campo4?: number;
  campo5?: string;
  campo6?: string;
  campo7?: string;
}

interface Props {
  onSubmit: (data: FormInputs) => void;
  navigation: StackNavigationProp<any>;
}

const Formulario: React.FC<Props> = ({ onSubmit, navigation }) => {
  const handleNext = () => {
    navigation.navigate('FormularioParte2');
  };

  return (
    <Formik
      initialValues={{
        campo1: undefined,
        campo2: undefined,
        campo3: '',
        campo4: undefined,
        campo5: '',
        campo6: '',
        campo7: '',
      }}
      onSubmit={(values) => {
        onSubmit(values);
        handleNext();
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View style={styles.container}>
          <TextInput
            style={styles.input}
            placeholder="Número de Chassi (VIN)"
            onChangeText={handleChange('campo1')}
            onBlur={handleBlur('campo1')}
            value={(values.campo1 !== undefined && values.campo1 !== null) ? values.campo1.toString() : ''}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Número do Motor"
            onChangeText={handleChange('campo2')}
            onBlur={handleBlur('campo2')}
            value={(values.campo2 !== undefined && values.campo2 !== null) ? values.campo2.toString() : ''}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Marca e Modelo"
            onChangeText={handleChange('campo3')}
            onBlur={handleBlur('campo3')}
            value={values.campo3 || ''}
          />
          <TextInput
            style={styles.input}
            placeholder="Ano de Fabricação"
            onChangeText={handleChange('campo4')}
            onBlur={handleBlur('campo4')}
            value={(values.campo4 !== undefined && values.campo4 !== null) ? values.campo4.toString() : ''}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Cor"
            onChangeText={handleChange('campo5')}
            onBlur={handleBlur('campo5')}
            value={values.campo5 || ''}
          />
          <TextInput
            style={styles.input}
            placeholder="Registro de Proprietários Anteriores"
            onChangeText={handleChange('campo6')}
            onBlur={handleBlur('campo6')}
            value={values.campo6 || ''}
          />
          <TextInput
            style={styles.input}
            placeholder="Histórico de Manutenção e Reparos"
            onChangeText={handleChange('campo7')}
            onBlur={handleBlur('campo7')}
            value={values.campo7 || ''}
          />
          <TouchableOpacity
            style={[styles.button, {backgroundColor: Object.values(values).every(value => !!value) ? 'blue' : 'gray'}]}
            onPress={handleNext}
            disabled={!Object.values(values).every(value => !!value)}
          >
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default Formulario;
