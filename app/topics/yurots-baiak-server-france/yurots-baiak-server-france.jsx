import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-baiak-server-france');
}

export default function YurotsBaiakServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-baiak-server-france" />;
}
