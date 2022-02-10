// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
	console.log(process.env.API_KEY_3);
	console.log(process.env.API_KEY_4);
	res.status(200).json({ name: 'John Doe' });
}
