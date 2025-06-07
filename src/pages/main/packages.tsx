import ActionBar from "@/components/actionBar"

export default function Packages() {
	const actionList = [
		{ title: "Create Package" },
		{ title: "View Keys"},
		{ title: "Edit Values"},
		{ title: "Generate Form B"},
		{ title: "Generate S10"},
		{ title: "Generate Mailing Labels"},
		{ title: "Download Package"},
		{ title: "Rename"},
		{ title: "Archive", type: "warning"},
		{ title: "Delete", type: "danger"},
	]

	return (
		<>
			<ActionBar actions={actionList} />
			<div>
				Tab content for Packages
			</div>
		</>
	)
}