import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-players-online-north-america');
}

export default function WithTrainersPlayersOnlineNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-players-online-north-america" />;
}
