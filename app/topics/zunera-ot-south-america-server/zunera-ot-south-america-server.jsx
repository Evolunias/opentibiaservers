import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-south-america-server');
}

export default function ZuneraOtSouthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-south-america-server" />;
}
