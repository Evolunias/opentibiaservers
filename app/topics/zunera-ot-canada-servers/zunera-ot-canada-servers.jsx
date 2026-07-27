import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-canada-servers');
}

export default function ZuneraOtCanadaServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-canada-servers" />;
}
