import ActionBar from "@/components/actionBar"

export default function FormA() {
	const actionList = [
		{ title: "Create Package" },
		{ title: "View Values"},
		{ title: "Archive", type: "warning"},
		{ title: "Delete", type: "danger"},
	]

	return (
		<>
			<div>
				Tab content for Form As
			</div>
		</>
	)
}