import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-players-online-usa');
}

export default function WithTrainersPlayersOnlineUsaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-players-online-usa" />;
}
