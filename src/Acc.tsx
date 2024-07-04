import { Accordion } from "flowbite-react";
import { type accord } from './types.ts'

interface Props {
  data: accord[]
}

export function Component({ data }: Props) {
  return (
    <Accordion>
      {
        data.map((element: accord) => (
          <Accordion.Panel>
            <Accordion.Title>{element.title}</Accordion.Title>
            <Accordion.Content>{element.content}</Accordion.Content>
          </Accordion.Panel>
        ))
      }
    </Accordion>
  );
}
