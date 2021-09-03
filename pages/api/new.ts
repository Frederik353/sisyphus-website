import type { NextApiRequest, NextApiResponse } from "next";

import middleware from "../../middleware/middleware";
import nextConnect from "next-connect";

type Data = {
    name: string;
};

const handler = nextConnect();
handler.use(middleware);

handler.post(async (req: NextApiRequest, res: NextApiResponse<Data>) => {
    console.log(req.body);
    console.log(req.files);
    res.status(200).json({ status: "Uploaded successfully" });
});

export const config = {
    api: {
        bodyParser: false,
    },
};

export default handler;
