import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MoviesSchema = new Schema
({
    Name:String,
    Year:String,
    Director:String,
    Rating:String


},
{
    collection:"movies"
}
)

const Model =mongoose.model("Movies", MoviesSchema)

export default Model;