import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-private-server');
}

export default function ZuneraOtPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-private-server" />;
}
