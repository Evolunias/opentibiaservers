import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-gunzodus-server');
}

export default function WithTrainersGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-gunzodus-server" />;
}
