import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
	flex: 1;
	padding: 30px;
`;

export const Header = styled.View`
	align-items: center;
	padding-bottom: 20px;
	border-bottom-width: 1px;
	border-color: #eee;
`;

export const Avatar = styled.Image`
	width: 100px;
	height: 100px;
	border-radius: 50px;
	background-color: #eee;
`;

export const Name = styled.Text`
	font-size: 20px;
	color: #333;
	font-weight: bold;
	margin-top: 10px;
	text-align: center;
`;

export const Bio = styled.Text`
	font-size: 16px;
	line-height: 18px;
	color: #999;
	margin-top: 5px;
	text-align: center;
`;

export const Stars = styled.FlatList.attrs({
	showsVerticalScrollIndicator: false,
})`
	margin-top: 20px;
`;

export const Starred = styled(RectButton)`
	background-color: #f5f5f5;
	border-radius: 4px;
	padding: 10px 15px;
	margin-bottom: 20px;
	flex-direction: row;
	align-items: center;
`;

export const OwnerAvatar = styled.Image`
	width: 42px;
	height: 42px;
	border-radius: 21px;
	background-color: #eee;
`;

export const Info = styled.View`
	margin-left: 10px;
	flex: 1;
`;

export const Title = styled.Text.attrs({
	numberOfLines: 1,
})`
	font-size: 16px;
	font-weight: bold;
	color: #333;
`;

export const Author = styled.Text`
	font-size: 14px;
	color: #667;
	margin-top: 2px;
`;

export const Center = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

export const Loading = styled.Text`
	font-weight: bold;
	font-size: 12px;
	color: #999;
`;