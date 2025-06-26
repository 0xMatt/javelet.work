import Profile from '@/app/_components/profile';
import Links from '@/app/_components/links';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export default function Home() {
  return (
    <>
      <Card>
        <CardHeader>
          <Profile />
        </CardHeader>
        <CardContent>
          <Links />
        </CardContent>
      </Card>
    </>
  );
}
