import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
	flex: 1;
	padding: 30px;
`;

export const Form = styled.View`
 flex-direction: row;
 padding-bottom: 20px;
 border-bottom-width: 1px;
 border-color: #eee;
`;

export const Input = styled.TextInput.attrs({
	placeholderTextColor: '#999',
})`
	flex: 1;
	height: 40px;
	background-color: #eee;
	border-radius: 4px;
	padding: 0 15px;
	border: 1px solid #eee;
`;

export const SubmitButton = styled(RectButton)`
	justify-content: center;
	align-items: center;
	background-color: #7159c1;
	border-radius: 4px;
	margin-left: 10px;
	padding: 0 12px;
	opacity: ${props => props.loading ? 0.7 : 1};
`;

export const List = styled.FlatList.attrs({
	showsVerticalScrollIndicator: false,
})`
	margin: 20px 0;
`;

export const User = styled.View`
	align-items: center;
	margin: 0 20px 30px;
`;

export const Avatar = styled.Image`
	width: 64px;
	height: 64px;
	border-radius: 32px;
	background-color: #eee;
`;

export const Name = styled.Text`
	font-size: 16px;
	color: #333;
	font-weight: bold;
	margin-top: 4px;
	text-align: center;
`;

export const Bio = styled.Text.attrs({
	numberOfLines: 2,
})`
	font-size: 15px;
	line-height: 18px;
	color: #999;
	margin-top: 5px;
	text-align: center;
`;

export const ProfileButton = styled(RectButton)`
	margin-top: 10px;
	align-self: stretch;
	border-radius: 4px;
	background-color: #7159c1;
	justify-content: center;
	align-items: center;
	height: 36px;
`;

export const ProfileButtonText = styled.Text`
	font-size: 16px;
	font-weight: bold;
	color: #fff;
	text-transform: uppercase;
`;

export const Footer = styled.View`
	padding-top: 20px;
	border-top-width: 1px;
	border-color: #eee;
	align-items: center;
`;

export const FooterText = styled.Text`
	font-size: 12px;
	color: #999;
`;