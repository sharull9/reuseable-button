import Button from "../Components/ResuableBtn";
import AbcIcon from "@mui/icons-material/Abc";

export default function Home() {
  return (
    <>
      <div className="container">
        <div>
          <div>
            <p>{"<Button />"}</p>
            <Button value="Default" />
          </div>
        </div>
        <div>
          <div>
            <p>{"<Button variant='outline'/>"}</p>
            <Button value="Default" variant="outline" />
          </div>
          <div>
            <p>{"<Button variant='fill'/>"}</p>
            <Button value="Default" variant="fill" />
          </div>
          <div>
            <p>{"<Button variant='text'/>"}</p>
            <Button value="Default" variant="text" />
          </div>
        </div>
        <div>
          <div>
            <p>{"<Button disabled/>"}</p>
            <Button value="Default" disabled />
          </div>
          <div>
            <p>{"<Button shadow='disabledShadow'/>"}</p>
            <Button value="Default" shadow="disabledShadow" />
          </div>
        </div>
        <div>
          <div>
            <p>{"<Button StartIcon={AbcIcon}/>"}</p>
            <Button value="Default" StartIcon={AbcIcon} />
          </div>
          <div>
            <p>{"<Button EndIcon={AbcIcon}/>"}</p>
            <Button value="Default" EndIcon={AbcIcon} />
          </div>
        </div>
        <div>
          <div>
            <p>{"<Button  size='sm'/>"}</p>
            <Button value="Default" size="sm" />
          </div>
          <div>
            <p>{"<Button size='md'/>"}</p>
            <Button value="Default" size="md" />
          </div>
          <div>
            <p>{"<Button size='lg'/>"}</p>
            <Button value="Default" size="lg" />
          </div>
        </div>
        <div>
          <div>
            <p>{"<Button color='default'/>"}</p>
            <Button value="Default" color="default" />
          </div>
          <div>
            <p>{"<Button color='primary'/>"}</p>
            <Button value="Default" color="primary" />
          </div>
          <div>
            <p>{"<Button color='secondary'/>"}</p>
            <Button value="Default" color="secondary" />
          </div>
          <div>
            <p>{"<Button color='danger'/>"}</p>
            <Button value="Default" color="danger" />
          </div>
        </div>
      </div>
      <footer>
        Made by: <a href="https://sharull.xyz">Arafatulla</a>
      </footer>
    </>
  );
}
