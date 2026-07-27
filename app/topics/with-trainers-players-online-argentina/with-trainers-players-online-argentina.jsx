import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-players-online-argentina');
}

export default function WithTrainersPlayersOnlineArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-players-online-argentina" />;
}
