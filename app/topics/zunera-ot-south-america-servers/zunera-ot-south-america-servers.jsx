import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-south-america-servers');
}

export default function ZuneraOtSouthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-south-america-servers" />;
}
