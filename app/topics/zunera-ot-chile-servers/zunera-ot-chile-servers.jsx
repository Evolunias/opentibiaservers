import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-chile-servers');
}

export default function ZuneraOtChileServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-chile-servers" />;
}
