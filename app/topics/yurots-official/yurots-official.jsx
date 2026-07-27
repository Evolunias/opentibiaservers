import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-official');
}

export default function YurotsOfficialKeywordPage() {
  return <StaticKeywordPage slug="yurots-official" />;
}
