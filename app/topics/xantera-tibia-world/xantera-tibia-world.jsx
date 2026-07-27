import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-tibia-world');
}

export default function XanteraTibiaWorldKeywordPage() {
  return <StaticKeywordPage slug="xantera-tibia-world" />;
}
