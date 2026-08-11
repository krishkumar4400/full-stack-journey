import ImageKit from "@imagekit/nodejs";
import imagekit from "../config/imageKit.js";
import songModel from "../model/song.model.js";
import id3 from "node-id3";

export const uploadSongController = async (req, res) => {
  try {
    const { mood } = req.body;
    const songBuffer = req.file.buffer;
    const tags = id3.read(songBuffer);

    console.log(songBuffer);

    const songFile = await imagekit.files.upload({
      file: songBuffer,
      fileName: `song${Math.round(Math.random() * 100)}${Date.now()}.mp3`,
      folder: "/Moodify/Songs",
    });
    console.log(songFile);

    // const posterFile = await imagekit.files.upload({
    //   file: tags.image.imageBuffer,
    //   fileName: `poster${Math.round(Math.random() + 100)}${Date.now()}.jpeg`,
    //   folder: "/Moodify/Posters",
    // });

    const song = await songModel.create({
      url: songFile.url,
      // posterUrl: posterFile.url,
      posterUrl: "test url",
      // title: tags.title,
      title: "test title",
      mood: mood,
    });

    /**

    const [songfile, posterfile] = await Promise.all({
        imagekit.files.upload({
      file: songBuffer,
      fileName: `song${Math.round(Math.random() * 100)}${Date.now()}.mp3`,
      folder: "/Moodify/Songs",
    }),

     imagekit.files.upload({
      file: tags.image.imageBuffer,
      fileName: `poster${Math.round(Math.random() + 100)}${Date.now()}.jpeg`,
      folder: "/Moodify/Posters",
    })
    })
         * 
     */

    return res.status(201).json({
      message: "Song uploaded successfully",
      success: true,
      song,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export const getSong = async (req, res) => {
  try {
    const { mood } = req.query;
    const song = await songModel.findOne({ mood });
    return res.status(200).json({
      message: "Song fetched successfully",
      success: true,
      song,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};
