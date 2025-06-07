import ActionBar from "@/components/actionBar"

export default function Templates() {
		const actionList = [
		{ title: "View Keys"},
		{ title: "Upload"},
		{ title: "Rename"},
		{ title: "Archive", type: "warning"},
		{ title: "Delete", type: "danger"},
	]

	return (
		<>
			<ActionBar actions={actionList} />
			<div>
				Tab content for Templates
			</div>
		</>
	)
}