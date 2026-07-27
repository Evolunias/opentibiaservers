import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-usa-server');
}

export default function ZuneraOtUsaServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-usa-server" />;
}
