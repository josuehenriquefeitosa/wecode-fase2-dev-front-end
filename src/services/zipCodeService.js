import axios from 'axios';


export const searchZipCode = async (zipCode) => {
  try {
    const response = await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);
    
    if (response.data && !response.data.erro) {
      return response.data; 
    }else{
      return null;
    }
    
  } catch (error) {
    console.error('Erro na API:', error);
    throw error;
    //throw new Error(error.message || 'Erro ao buscar o CEP.');
  }
};
