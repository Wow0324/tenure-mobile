import Toast from 'react-native-toast-message';

export const showToast = (title : string, content : string) => {
    Toast.show({
        type: 'success',
        text1: title?title:'',
        text2: content?content:''
    });
}