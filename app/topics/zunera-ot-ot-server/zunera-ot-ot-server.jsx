import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-ot-server');
}

export default function ZuneraOtOtServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-ot-server" />;
}
