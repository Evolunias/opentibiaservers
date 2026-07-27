import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-players-online-mexico');
}

export default function WithTrainersPlayersOnlineMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-players-online-mexico" />;
}
