import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-players-online-south-america');
}

export default function WithTrainersPlayersOnlineSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-players-online-south-america" />;
}
