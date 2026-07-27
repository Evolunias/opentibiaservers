import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-players-online-latin-america');
}

export default function WithTrainersPlayersOnlineLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-players-online-latin-america" />;
}
