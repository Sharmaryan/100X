import Link from "next/link";
import Card from "../../components/card";

export default function Notifications(){
    return <Card>
        <div>Notifications</div>
        <Link href={'/complex-dashboard/archived'} className="text-blue-700">Archived</Link>
    </Card>
}