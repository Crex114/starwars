const Heading = ({ tag, text, size }) => {
	const Tag = tag || 'h1';
	return <Tag>{size} {text}</Tag>
}

export default Heading;
