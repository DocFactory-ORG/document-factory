import {
  Stack,
	Button,
} from 'react-bootstrap';

export default function ActionBar({ actions }: any) {
	
	return (
		<Stack direction="horizontal" gap={1} className="align-content-center">
				{actions.map((action: any) => (
				<Button size="sm" variant={action.type ?? "outline-primary"} key={action.title}>
					{action.title}
				</Button>
			))}
		</Stack>
	)
}