import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-1-non-pvp-server');
}

export default function Xanteria71NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-1-non-pvp-server" />;
}
