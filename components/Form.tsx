export default function Form() {
    return (
        <form method="post" action="/api/new" encType="multipart/form-data">
            <input name="logo" type="file" />
            <input type="submit" value="Submit" />
        </form>
    );
}
