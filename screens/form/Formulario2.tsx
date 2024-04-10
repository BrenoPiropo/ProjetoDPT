import React from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { Formik } from 'formik';
import { styles } from './style';
import { StackNavigationProp } from '@react-navigation/stack';

interface FormInputs {
  campo8?: string;
  campo9?: string;
  campo10?: number;
  campo11?: number;
  campo12?: string;
}

interface Props {
  onSubmit: (data: FormInputs) => void;
  navigation: StackNavigationProp<any>;
}

const Formulario2: React.FC<Props> = ({ onSubmit, navigation }) => {
  const handleNext = () => {
    navigation.navigate('CameraScreen');
  };

  return (
    <Formik
      initialValues={{
        campo8: undefined,
        campo9: undefined,
        campo10: undefined,
        campo11: undefined,
        campo12: undefined,
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
            placeholder="Registro de Inspeções e Emissões"
            onChangeText={handleChange('campo8')}
            onBlur={handleBlur('campo8')}
            value={values.campo8 || ''}
          />
          <TextInput
            style={styles.input}
            placeholder="Documentação Legal"
            onChangeText={handleChange('campo9')}
            onBlur={handleBlur('campo9')}
            value={values.campo9 || ''}
          />
          <TextInput
            style={styles.input}
            placeholder="Verificação de Números de Peças"
            onChangeText={handleChange('campo10')}
            onBlur={handleBlur('campo10')}
            value={(values.campo10 !== undefined && values.campo10 !== null) ? values.campo10.toString() : ''}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Verificação de Placas"
            onChangeText={handleChange('campo11')}
            onBlur={handleBlur('campo11')}
            value={(values.campo11 !== undefined && values.campo11 !== null) ? values.campo11.toString() : ''}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            placeholder="Verificação de Documentos"
            onChangeText={handleChange('campo12')}
            onBlur={handleBlur('campo12')}
            value={values.campo12 || ''}
          />
          <TouchableOpacity
            style={[styles.button, {backgroundColor: values.campo8 && values.campo9 && values.campo10 !== undefined && values.campo11 !== undefined && values.campo12 ? 'blue' : 'gray'}]}
            onPress={handleNext}
            disabled={!values.campo8 || !values.campo9 || values.campo10 === undefined || values.campo11 === undefined || !values.campo12}
          >
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      )}
    </Formik>
  );
};

export default Formulario2;
