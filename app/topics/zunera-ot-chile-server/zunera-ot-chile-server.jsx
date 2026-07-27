import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-chile-server');
}

export default function ZuneraOtChileServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-chile-server" />;
}
